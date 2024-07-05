---
title: 2. struct eCAL::SSubEventCallbackData
---

eCAL subscriber event callback struct.

# Members

### `public eCAL_Subscriber_Event `[`type`](#de/de6/structeCAL_1_1SSubEventCallbackData_1a1e1443f266b9ce27f37cf0fbe2c34e44) 

subscriber event type

### `public long long `[`time`](#de/de6/structeCAL_1_1SSubEventCallbackData_1ae5c167e8274e2a1a16ab416383dddd11) 

subscriber event time in µs

### `public long long `[`clock`](#de/de6/structeCAL_1_1SSubEventCallbackData_1a61f146f69892d232afa4769323d58e5f) 

subscriber event clock

### `public std::string `[`tid`](#de/de6/structeCAL_1_1SSubEventCallbackData_1a4fc15ba0ba651762858e2c64b5871d97) 

topic id of the of the connected publisher (for sub_event_update_connection only)

### `public std::string `[`ttype`](#de/de6/structeCAL_1_1SSubEventCallbackData_1a5e3798b9dd840ca0d216ccebb105cec2) 

topic type information of the connected publisher (for sub_event_update_connection only)

### `public std::string `[`tdesc`](#de/de6/structeCAL_1_1SSubEventCallbackData_1ac40ce0f98cffe8b258dc866b73ffa5ca) 

topic descriptor information of the connected publisher (for sub_event_update_connection only)

### `public `[`SDataTypeInformation`](src/content/docs/doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`tdatatype`](#de/de6/structeCAL_1_1SSubEventCallbackData_1ada95800b1278580c3884f7312233aa1d) 

topic information of the connected subscriber (for pub_event_update_connection only)

### `public inline  `[`SSubEventCallbackData`](#de/de6/structeCAL_1_1SSubEventCallbackData_1aa24eb968e2753237830b6f6ccec848cd)`()` 

