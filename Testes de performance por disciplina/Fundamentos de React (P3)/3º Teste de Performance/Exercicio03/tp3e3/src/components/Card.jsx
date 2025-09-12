export default function Card({style}) {
    const PERSON = {
        name: "Leon",
        lastName: "Scott Kennedy",
        picture: "https://deadbydaylight.wiki.gg/images/S27_LeonScottKennedy_Portrait.png?5f9ae0",
        address: "Rua Campo Vermelho, 123. Centro - Cidade dos Racoons. CEP: 01234-567",
        contactList: [
            "(11) 98765-4321",
            "(11) 91234-5678"
        ],
        emails: [
            "leon.kennedy@email.com",
            "leonskennedy@trabalho.com"
        ],
    };

    return (
        <>
            <div style={{
                display: style.display,
                flexDirection: style.flexDirection,
                justifyContent: "space-around",
                alignItems: "center",
                boxShadow: `0 4px 8px 0 ${style.shadowColor}`,
                maxWidth: style.maxWidth,
                borderRadius: style.borderRadius,
            }}>
                <div style={{
                    display: style.display,
                    flexDirection: style.flexDirection,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <h1>{PERSON.name} {PERSON.lastName}</h1>
                    <img src={PERSON.picture} alt={`${PERSON.name} ${PERSON.lastName}`}
                         style={{maxWidth: "50%"}}/>
                </div>

                <div style={{padding:'10px'}}>
                    <h3>Contatos</h3>
                    <ul>
                        {PERSON.contactList.map((contact) => {
                            return <li>{contact}</li>
                        })}
                    </ul>

                    <h3>Emails</h3>
                    <ul>
                        {PERSON.emails.map((email) => {
                            return <li>{email}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}