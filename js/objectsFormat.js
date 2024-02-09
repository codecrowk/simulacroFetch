function newsDBToAdminViews (userData) {
  const viewsFormat = {
    image_url: userData.image, 
    title: userData.title, 
    content: userData.content, 
    publication_date: userData.creation_date, 
    category: userData.category_id, 
    autor: userData.autor_id
  }
  return viewsFormat
}

export { newsDBToAdminViews }