---
title: {{kind}} {{name}}
sidebar:
    order: 3
---

# {{kind}} `{{name}}`

{{briefdescription}}

{{detaileddescription}}

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
{{#each filtered.members}}{{cell proto}}            | {{cell summary}}
{{/each}}{{#each filtered.compounds}}{{cell proto}} | {{cell summary}}
{{/each}}

{{#if filtered.members}}
## Members

{{#each filtered.members}}
#### {{title proto}}

{{#if enumvalue}}
 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
{{#each enumvalue}}{{cell name}}            | {{cell summary}}
{{/each}}
{{/if}}

{{briefdescription}}

{{detaileddescription}}

{{/each}}
{{/if}}
