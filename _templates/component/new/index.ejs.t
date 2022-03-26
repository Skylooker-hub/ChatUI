---
to: src/components/<%= name %>/<%= name %>.tsx
---
import { Styled<%= name %> } from "./style";

export interface I<%= name %>Props {
  [key: string]: any;
}

function <%= name %>({
  ...rest
}: I<%= name %>Props) {
  return (
    <Styled<%= name %> {...rest}>
    </Styled<%= name %>>
  );
}

export default <%= name %>;