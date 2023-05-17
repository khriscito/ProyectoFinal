import { toast } from "react-toastify";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      backendUrl: process.env.BACKEND_URL,
      token: localStorage.getItem("token") || "",
      rooms: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      room_status: [
        { value: "avaible", label: "Disponible" },
        { value: "maintenance", label: "Mantenimiento" },
        { value: "not_avaible", label: "No disponible" },
      ],
      clients: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      registerUser: async (user) => {
        const store = getStore();
        const response = await fetch(store.backendUrl + "/api/register", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            hotel_name: user.name,
          }),
        });
        const mensaje = await response.json();
        console.log(mensaje);
        return true;
      },

      login: async (user) => {
        const store = getStore();
        const response = await fetch(store.backendUrl + "/api/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ email: user.email, password: user.password }),
        });
        const mensaje = await response.json();
        console.log(mensaje);
        setStore({ ...store, token: mensaje.token });
        localStorage.setItem("token", mensaje.token);
        return true;
      },

      room: async () => {
        const store = getStore();
        const response = await fetch(store.backendUrl + "/api/rooms", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        });
        const rooms = await response.json();
        const sortedRooms = rooms.rooms.sort((a, b) => {
          return a.id - b.id;
        });

        console.log(rooms);
        try {
          setStore({ ...store, rooms: sortedRooms });
        } catch (error) {
          console.log("error al cargar las habitaciones", error);
        }
      },
      createRoom: async (room) => {
        const store = getStore();
        try {
          const response = await fetch(store.backendUrl + "/api/room", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization: "Bearer " + store.token,
            },
            body: JSON.stringify(room),
          });
          const mensaje = await response.json();
          toast.success("Habitacion creada con exito");
          return true;
        } catch (error) {
          console.log("error al crear habitacion", error);
        }
        return true;
      },
      changeRoomStatus: async (room_id, status) => {
        const store = getStore();
        try {
          const response = await fetch(
            store.backendUrl + "/api/room/" + room_id,
            {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
                authorization: "Bearer " + store.token,
              },
              body: JSON.stringify({ status: status }),
            }
          );
          const mensaje = await response.json();
          if (!response.ok) {
            toast.error("Error al cambiar estado de habitacion");
            return false;
          }
          toast.success("Estado de habitacion cambiado con exito");

          return true;
        } catch (error) {
          console.log("error al cambiar estado de habitacion", error);
        }
      },
      deleteRoom: async (room_id) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(
            store.backendUrl + "/api/room/" + room_id,
            {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
                authorization: "Bearer " + store.token,
              },
            }
          );
          const mensaje = await response.json();
          if (!response.ok) {
            toast.error("Error al eliminar habitacion");
            return false;
          }
          toast.success("Habitacion eliminada con exito");
          actions.room();
          return true;
        } catch (error) {
          console.log("error al eliminar habitacion", error);
        }
      },
      createClient: async (client) => {
        const store = getStore();
        try {
          const response = await fetch(store.backendUrl + "/api/customer", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization: "Bearer " + store.token,
            },
            body: JSON.stringify(client),
          });
          const mensaje = await response.json();
          if (!response.ok) {
            toast.error("Error al crear cliente");
            return false;
          }
          toast.success("Cliente creado con exito");
          getActions().getClients();
          return true;
        } catch (error) {
          console.log("error al crear cliente", error);
        }
      },
      getClients: async () => {
        const store = getStore();
        try {
          const response = await fetch(store.backendUrl + "/api/customers", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              authorization: "Bearer " + store.token,
            },
          });
          const clientes = await response.json();
          const sortedClientes = clientes.customers.sort((a, b) => {
            return a.id - b.id;
          });
          console.log(sortedClientes);
          setStore({ ...store, clients: sortedClientes });
        } catch (error) {
          console.log("error al cargar los clientes", error);
        }
      },
      createCheckIn: async (checkIn, id) => {
        const store = getStore();
        const body = {
          ...checkIn,
          room_id: id,
        };
        try {
          const response = await fetch(store.backendUrl + "/api/checkin", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization: "Bearer " + store.token,
            },
            body: JSON.stringify(body),
          });
          const mensaje = await response.json();
          if (!response.ok) {
            console.log(response);
            toast.error("Error al crear checkin");
            return false;
          }
          toast.success("Checkin creado con exito");
          getActions().room();
          return true;
        } catch (error) {
          toast.error("Error al crear checkin");

          console.log("error al crear checkin", error);
        }
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
