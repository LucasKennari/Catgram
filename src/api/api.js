export const API_URL = "https://dogsapi.origamid.dev/json"

export function TOKEN_POST(body) {
          return {
                    url: API_URL + "/jwt-auth/v1/token",
                    options: {
                              method: 'POST',
                              headers: {
                                        'Content-type': 'application/json',
                              },
                              body: JSON.stringify(body)
                    },
          }
}

export function TOKEN_VALIDATE_POST(token) {

          return {
                    url: API_URL + "/jwt-auth/v1/token/validate",
                    options: {
                              method: 'POST',
                              headers: {
                                        Authorization: 'Bearer ' + token,
                              },

                    },
          }
}

export function USER_GET(token) {
          return {
                    url: API_URL + "/api/user",
                    options: {
                              method: 'GET',
                              headers: {
                                        Authorization: 'Bearer ' + token,
                              }

                    }
          }
}

export function USER_POST(body) {
          return {
                    url: API_URL + "/api/user",
                    options: {
                              method: 'POST',
                              headers: {
                                        'Content-type': 'application/json',
                              },
                              body: JSON.stringify(body)
                    },
          }
}


export function PHOTOS_GET({ page, total, user }) {

          return {

                    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
                    options: {
                              method: 'GET',
                              cache: 'no-store'
                    },
          }
}

export function PHOTO_GET(id) {
          return {

                    url: `${API_URL}/api/photo/${id}`,
                    options: {
                              method: 'GET',
                              cache: 'no-store'
                    },
          }

}

export function PHOTO_POST(token, formData) {
          return {
                    url: API_URL + "/api/photo",
                    options: {
                              method: 'POST',
                              headers: {
                                        Authorization: 'Bearer ' + token,
                              },
                              body: formData

                    }
          }
}

export function COMMENT_POST(id, body, token) {
          return {

                    url: `${API_URL}/api/comment/${id}`,
                    options: {
                              method: 'POST',
                              headers: {
                                        'Content-type': 'application/json',
                                        Authorization: 'Bearer ' + token
                              },
                              body: JSON.stringify(body)
                    },

          }

}

export function PHOTO_DELETE(id, token) {
          return {

                    url: `${API_URL}/api/photo/${id}`,
                    options: {
                              method: 'DELETE',
                              headers: {
                                        Authorization: 'Bearer ' + token
                              }

                    }

          }

}
export function PASSWORD_LOST(body) {
          return {
                    url: API_URL + '/api/password/lost',
                    options: {
                              method: 'POST',
                              headers: {
                                        'Content-type': 'application/json',

                              },
                              body: JSON.stringify(body)
                    },
          }
}
export function PASSWORD_RESET(body) {
          return {
                    url: API_URL + '/api/password/reset',
                    options: {
                              method: 'POST',
                              headers: {
                                        'Content-type': 'application/json',

                              },
                              body: JSON.stringify(body)
                    },
          }
}