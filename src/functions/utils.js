export default function formatUpdatedAt(original) {
  const dateInstance = new Date(original);

  const time = dateInstance.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const date = dateInstance.toLocaleDateString('pt-BR');

  return `Atualizado ${time} no dia ${date}`;
}
