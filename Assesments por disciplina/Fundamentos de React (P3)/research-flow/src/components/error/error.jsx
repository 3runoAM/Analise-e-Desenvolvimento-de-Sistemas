export default function Error({ onUnselect }) {
  return (
    <div className="flex-column centered mediumGap">
      <p className="error">Arquivo de detalhes não encontrado :/</p>
      <button onClick={onUnselect}>Voltar</button>
    </div>
  );
}
