import { cubicOut as cubic_out } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

/**
 * Combines svelte `slide` and `fade` transitions into a single transition
 * instead of having to create two divs with one transition on each
 *
 * uses \@ts-expect-error to keep this as close to the original as possible
 *
 * {@link https://github.com/sveltejs/svelte/blob/04836a87995f0674ae4f105b7761fd19f7ee3b6a/packages/svelte/src/transition/index.js}
 */
export function slideFade(
  node: Element,
  { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}
): TransitionConfig {
  const style = getComputedStyle(node);

  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties =
    axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    // @ts-expect-error - Object is possibly 'undefined'
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );

  const padding_start_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`padding${capitalized_secondary_properties[0]}`]
  );
  const padding_end_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`padding${capitalized_secondary_properties[1]}`]
  );
  const margin_start_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`margin${capitalized_secondary_properties[0]}`]
  );
  const margin_end_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`margin${capitalized_secondary_properties[1]}`]
  );
  const border_width_start_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    // @ts-expect-error - Element implicitly has an 'any' type ...
    style[`border${capitalized_secondary_properties[1]}Width`]
  );

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      "overflow: hidden;" +
      `opacity: ${t * opacity};` +
      `${primary_property}: ${t * primary_property_value}px;` +
      `padding-${secondary_properties[0]}: ${t * padding_start_value}px;` +
      `padding-${secondary_properties[1]}: ${t * padding_end_value}px;` +
      `margin-${secondary_properties[0]}: ${t * margin_start_value}px;` +
      `margin-${secondary_properties[1]}: ${t * margin_end_value}px;` +
      `border-${secondary_properties[0]}-width: ${
        t * border_width_start_value
      }px;` +
      `border-${secondary_properties[1]}-width: ${
        t * border_width_end_value
      }px;` +
      `min-${primary_property}: 0`,
  };
}
