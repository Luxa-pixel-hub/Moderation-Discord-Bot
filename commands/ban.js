module.exports = {
  
  name: "ban",
  code: `
$ban[$mentioned[1]]
$color[#FF0000]
$footer[BENUTZER WURDE ERFOLGREICH GEBANNT!]
$author[Das hat er jetzt davon!]
$description[Du hast soeben einen Benutzer erfolgreich vom Server gebannt!
$addField[Banned;<@$mentioned[1]>]
$addField[Admin;<@$authorID>]
$addField[Reason;$noMentionMessage]
]
$argsCheck[>2;Use: \`$getServerVar[prefix]ban <@user> <Reason>\`]
$onlyPerms[manageserver;❌ **Du darfst diesen Befehl nicht ausführen!**]
`
}
