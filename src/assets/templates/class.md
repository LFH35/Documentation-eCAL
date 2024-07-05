---
title: {{kind}} {{name}}
sidebar:
  order: 2
---

{{#if basecompoundref}}
```cpp
{{kind}} {{name}}
  {{#each basecompoundref}}
  : {{prot}} {{name}}
  {{/each}}
```
{{/if}}

{{briefdescription}}

{{detaileddescription}}

## Members

{{#each filtered.compounds}}
### {{title proto}} 

{{briefdescription}}

{{detaileddescription}}
{{/each}}

{{#each filtered.members}}
### {{title proto}} 

{{#if enumvalue}}
 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
{{#each enumvalue}}{{cell name}}            | {{cell summary}}
{{/each}}
{{/if}}

{{briefdescription}}

{{detaileddescription}}

{{/each}}
