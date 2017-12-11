const WRITE_CAMPUS = "WRITE_CAMPUS";
const WRITE_CAMPUS_NAME = "WRITE_CAMPUS_NAME";
const WRITE_CAMPUS_IMG = "WRITE_CAMPUS_IMG";
const WRITE_CAMPUS_DESC = "WRITE_CAMPUS_DESC";

export function writeCampus (campus) {
  return { type: WRITE_CAMPUS, campus };
}

export function writeCampusName (name) {
  return { type: WRITE_CAMPUS_NAME, name };
}

export function writeCampusImg(img) {
  return { type: WRITE_CAMPUS_IMG, img };
}

export function writeCampusDesc(desc) {
  return { type: WRITE_CAMPUS_DESC, desc };
}

const initialState = { 
  id: 0, 
  name: '', 
  imageUrl: 'https://www.nationalgeographic.com/content/dam/science/photos/000/009/940.jpg', 
  description: '' 
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.campus;
    
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, { name: action.name });

    case WRITE_CAMPUS_IMG:
      return Object.assign({}, state, { imageUrl: action.img });

    case WRITE_CAMPUS_DESC:
      return Object.assign({}, state, { description: action.desc });

    default:
      return state;
  }
}