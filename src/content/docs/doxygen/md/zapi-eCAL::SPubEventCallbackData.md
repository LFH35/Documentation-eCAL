---
title: 2. struct eCAL::SPubEventCallbackData
---

eCAL publisher event callback struct.

# Members

### `public eCAL_Publisher_Event `[`type`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1aecc8fd8a2f02cbf5386ec5dfcb8dc78d) 

publisher event type

### `public long long `[`time`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1a8ac417eae8daf46dd5b6a00721268273) 

publisher event time in µs

### `public long long `[`clock`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1a1998c8d07e9b046f9cf04cfb1b8f7f40) 

publisher event clock

### `public std::string `[`tid`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1aad6953139e9e168a3313d600e1f2ed12) 

topic id of the of the connected subscriber (for pub_event_update_connection only)

### `public std::string `[`ttype`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1a6e4f62c71dd68a87379138064e0e54d7) 

topic type information of the connected publisher (for sub_event_update_connection only)

### `public std::string `[`tdesc`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1a3f57151bd0ae8e9a52bf742473ee23df) 

topic descriptor information of the connected publisher (for sub_event_update_connection only)

### `public `[`SDataTypeInformation`](src/content/docs/doxygen/md/zapi-eCAL::SDataTypeInformation.md#d7/d0f/structeCAL_1_1SDataTypeInformation)` `[`tdatatype`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1aeba8116a327f6e787311e8d75e907112) 

datatype description of the connected subscriber (for pub_event_update_connection only)

### `public inline  `[`SPubEventCallbackData`](#d7/dcb/structeCAL_1_1SPubEventCallbackData_1a5110ac143cdd02f817dfc9854a5f6387)`()` 

