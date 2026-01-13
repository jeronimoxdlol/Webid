async function searchUser() {
      const userId = document.getElementById("userId").value.trim();
        const result = document.getElementById("result");

          if (!userId) return alert("Ingresa un ID válido");

            result.classList.add("hidden");

              try {
                  const res = await fetch(`/api/user?id=${userId}`);
                      const data = await res.json();

                          if (!res.ok) {
                                alert(data.error || "Usuario no encontrado");
                                      return;
                                          }

                                              document.getElementById("avatar").src = data.avatar;
                                                  document.getElementById("username").textContent = data.username;
                                                      document.getElementById("id").textContent = data.id;
                                                          document.getElementById("created").textContent = data.createdAt;

                                                              result.classList.remove("hidden");

                                                                } catch {
                                                                    alert("Error de conexión");
                                                                      }
                                                                      }
}