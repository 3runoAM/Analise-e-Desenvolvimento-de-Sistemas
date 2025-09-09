export default function Quest({ questList }) {
  return (
    <>
      <ul className="flex-column">
        {questList.map((questList) => (
          <li>
            <h3>{questList.title}</h3>
            <p>{questList.description}</p>
            <br />
            <dl>
              <div className="flex">
                <dt>Tipo</dt>
                <dd>{questList.type}</dd>
              </div>
              <div className="flex">
                <dt>Dificuldade</dt>
                <dd>{questList.difficulty}</dd>
              </div>
            </dl>

            <h4>Objetivos</h4>
            <ul>
              {questList.objectives.map((objective) => (
                <li>{objective}</li>
              ))}
            </ul>

            <h4>Recompensas</h4>
            <dl>
              <div className="flex">
                <dt>Créditos</dt>
                <dd>{questList.reward.credits}</dd>
              </div>

              <div className="flex">
                <dt>Itens</dt>
                <dd>
                  <ul>
                    {questList.reward.items.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <h4>Reputação</h4>
            <dl>
              {Object.entries(questList.reward.reputation).map(
                ([key, value]) => {
                  return (
                    <>
                      <div className="flex">
                        <dt>{key}</dt>
                        <dd>{value}</dd>
                      </div>
                    </>
                  );
                }
              )}
            </dl>

            <h4>Especial: {questList.special}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
