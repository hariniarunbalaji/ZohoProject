import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  // GET_CONTACT_DETAILS,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "ram",
      username: "kumar",
      email: "ramkumar@gmail.com",
      fathername:"ragu",
      address: {
        street: "kumaran nagar",
        city: "chennai",
        zipcode: "00099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "HCL",
      },
    },
    {
      id: 2,
      name: "madhan",
      username: "kumar",
      email: "madhankumar@gmail.com",
      fathername:"kumar",
      address: {
        street: "senthil nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "TCCL",
      },
    },
    {
      id: 3,
      name: "shridhar",
      username: "sridhar",
      email: "sridhar@gmail.com",
      fathername:"manoj",
      address: {
        street: "kumaran nagar",
        city: "chennai",
        zipcode: "00099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "TCS",
      },
    },
    {
      id: 4,
      name: "viki",
      username: "viki",
      email: "viki@gmail.com",
      fathername:"ragu",
      address: {
        street: "anna nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "TCCL",
      },
    },
    {
      id: 5,
      name: "meera",
      username: "meera",
      email: "meera@gmail.com",
      fathername:"ragu",
      address: {
        street: "anna nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "cts",
      },
    },
    {
      id: 6,
      name: "radhika",
      username: "radhika",
      email: "radhika@gmail.com",
      fathername:"ragu",
      address: {
        street: "anna nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "zoho",
      },
    },
    {
      id: 7,
      name: "ramya",
      username: "ramya",
      email: "ramya@gmail.com",
      fathername:"ragu",
      address: {
        street: "anna nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "TCCL",
      },
    },
    {
      id: 8,
      name: "madhu",
      username: "madhu",
      email: "madhu@gmail.com",
      fathername:"ragu",
      address: {
        street: "anna nagar",
        city: "chennai",
        zipcode: "600099",
      },
      phone: "0987654321",
      website: "asd.org",
      company: {
        name: "TCCL",
      },
    },
      {
        id: 9,
        name: "madhu",
        username: "madhu",
        email: "madhu@gmail.com",
        fathername:"ragu",
        address: {
          street: "anna nagar",
          city: "chennai",
          zipcode: "600099",
        },
        phone: "0987654321",
        website: "asd.org",
        company: {
          name: "TCCL",
        },
      },
        {
          id: 10,
          name: "jothi",
          username: "jothi",
          email: "madhu@gmail.com",
          fathername:"ragu",
          address: {
            street: "anna nagar",
            city: "chennai",
            zipcode: "600099",
          },
          phone: "0987654321",
          website: "asd.org",
          company: {
            name: "TCCL",
          }
    },
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
      // case GET_CONTACT_DETAILS:
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     (contact) => contact.id != action.payload
      //   ),
      // };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
