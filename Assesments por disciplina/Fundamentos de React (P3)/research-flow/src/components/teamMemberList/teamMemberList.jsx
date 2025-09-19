import {useState} from "react";

export default function TeamMemberList({members, addNewMember}) {
    const [newMember, setNewMember] = useState({
        name: "",
        role: ""
    });

    const handleNewMemberUpdate = (field, value) => {
        setNewMember({
            ...newMember,
            [field]: value
        });
    }

    const handleNewMemberSubmit = () => {
        if (newMember.name && newMember.role) {
            addNewMember(newMember);
            setNewMember({name: "", role: ""});
        }
    }

    return (
        <section>
            <ul>
                {
                    members.map((member) => (
                        <li>
                            <strong>{member.name}</strong> — {member.role}
                        </li>
                    ))
                }
            </ul>

            <form className="flex-column smallGap">
                <div className="flex-column smallGap">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={newMember.name}
                        onChange={e => handleNewMemberUpdate("name", e.target.value)}
                    />
                </div>
                <div className="flex-column smallGap">
                    <label>Função</label>
                    <input
                        type="text"
                        value={newMember.role}
                        onChange={e => handleNewMemberUpdate("role", e.target.value)}
                    />
                </div>

                <button type="button" onClick={handleNewMemberSubmit}>Adicionar Membro</button>
            </form>

        </section>
    );
}