import {useState} from "react";

export default function ProjectForm({handleSubmit}) {
    const [project, setProject] = useState({
        id: "",
        title: "",
        researcher: "",
        status: true,
        startDate: new Date(),
        description: ""
    });

    function updateProjectField(field, value) {
        setProject({
            ...project,
            [field]: value
        });
    }

    return (
        <form className="flex-column smallGap">
            <div className="flex-column smallGap">
                <div className="flex-column smallGap">
                    <label htmlFor="id">ID do Projeto:</label>
                    <input id="id"
                           required
                           type="text"
                           value={project.id}
                           onChange={(e) => (updateProjectField("id", e.target.value))}/>
                </div>

                <div className="flex-column smallGap">
                    <label htmlFor="title">Título do Projeto:</label>
                    <input id="title"
                           required
                           type="text"
                           value={project.title}
                           onChange={(e) => (updateProjectField("title", e.target.value))}/>
                </div>

                <div className="flex-column smallGap">
                    <label htmlFor="researcher">Pesquisador:</label>
                    <input id="researcher"
                           required
                           type="text"
                           value={project.researcher}
                           onChange={(e) => (updateProjectField("researcher", e.target.value))}/>
                </div>

                <div className="flex-column smallGap">
                    <label htmlFor="status">Status:</label>
                    <select id="status"
                            required
                            value={project.status}
                            onChange={(e) => (updateProjectField("status", e.target.value))}>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>
                </div>

                <div className="flex-column smallGap">
                    <label htmlFor="startDate">Data de Início:</label>
                    <input id="startDate"
                           required
                           type="date"
                           value={project.startDate.toISOString().split('T')[0]}
                           onChange={(e) => (updateProjectField("startDate", new Date(e.target.value)))}/>
                </div>

                <div className="flex-column smallGap">
                    <label htmlFor="description">Descrição:</label>
                    <textarea id="description"
                              required
                              maxLength={500}
                              value={project.description}
                              onChange={(e) => (updateProjectField("description", e.target.value))}></textarea>
                </div>
            </div>

            <button className="button" type="button" onClick={() => handleSubmit(project)}>Salvar</button>
        </form>
    );
}