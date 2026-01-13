export default async function handler(req, res) {
      const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "ID requerida" });
              }

                try {
                    const response = await fetch(`https://discord.com/api/v10/users/${id}`, {
                          headers: {
                                  Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
                                        }
                                            });

                                                if (!response.ok) {
                                                      return res.status(404).json({ error: "Usuario no encontrado" });
                                                          }

                                                              const user = await response.json();

                                                                  const createdTimestamp =
                                                                        (BigInt(user.id) >> 22n) + 1420070400000n;

                                                                            res.json({
                                                                                  id: user.id,
                                                                                        username: `${user.username}${user.discriminator !== "0" ? "#" + user.discriminator : ""}`,
                                                                                              avatar: user.avatar
                                                                                                      ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                                                                                                              : "https://cdn.discordapp.com/embed/avatars/0.png",
                                                                                                                    createdAt: new Date(Number(createdTimestamp)).toLocaleString()
                                                                                                                        });

                                                                                                                          } catch {
                                                                                                                              res.status(500).json({ error: "Error interno" });
                                                                                                                                }
                                                                                                                                }
}