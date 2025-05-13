export const initialStore=()=>{
  return{
   favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'Add':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case 'Remove':
      return {
        ...store,
        favorites: store.favorites.filter(
          fav=> fav.name !== action.payload.name
        )
      };
    default:
      return store
  }    
}
