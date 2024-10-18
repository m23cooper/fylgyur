import { plugin } from '@formkit/vue';

export function formkitEmptyPlugin() {
  return (node) => {
    if (
      node.type === 'group' ||
      node.type === 'form' ||
      node.type === 'multi-step'
    ) {
      node.on('created', () => {
        node.context.state.empty = true;
      });

      node.on('commit', () => {
        const isEmpty = Object.values(node.value).every((value) => !value);
        node.context.state.empty = isEmpty;
      });
    }
  };
}
