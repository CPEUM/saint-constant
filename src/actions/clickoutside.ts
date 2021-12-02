/**
 * Directive pour gérer les clics en dehors d'un élément.
 */
export function clickoutside(node: Node) {

    const monitorClick = click => {
        if (node && !node.contains(click.target) && !click.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('clickoutside'))
        }
    }

    document.addEventListener('click', monitorClick, true);
    
    return {
        destroy() {
            document.removeEventListener('click', monitorClick, true);
        }
    }
}