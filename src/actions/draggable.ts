/**
 * Attache le nécessaire à un élément HTML pour écouter les interactions
 * et en émettre les événements pertinents au drag/pan.
 *
 * _Crédits au concepteur original de l'exemple svelte: https://svelte.dev/tutorial/actions_
 */
export function draggable(node: Node): {destroy: () => void} {
    let x;
    let y;
    let moved = false;

    function handleMousedown(e) {
        x = e.clientX;
        y = e.clientY;
        node.dispatchEvent(new CustomEvent('movestart', {
            detail: {x, y}
        }));
        window.addEventListener('mousemove', handleMousemove);
        window.addEventListener('mouseup', handleMouseup);
    }

    function handleMousemove(e) {
        e.preventDefault();
        moved = true;
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        x = e.clientX;
        y = e.clientY;
        node.dispatchEvent(new CustomEvent('move', {
            detail: {x, y, dx, dy}
        }));
    }

    function handleMouseup(e) {
        x = e.clientX;
        y = e.clientY;
        node.dispatchEvent(new CustomEvent('moveend', {
            detail: {x, y, moved}
        }));
        moved = false;
        window.removeEventListener('mousemove', handleMousemove);
        window.removeEventListener('mouseup', handleMouseup);
    }

    node.addEventListener('mousedown', handleMousedown);

    return {
        destroy() {
            node.removeEventListener('mousedown', handleMousedown);
        }
    };
}