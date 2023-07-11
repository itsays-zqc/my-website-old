# interface

```py
class 
maxoptics_sdk.core.ports.interface.PortInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
##  add a port

### Syntax

abstract add(*, `type`: Literal['eme_port'], `name`: str, `property`: PostProcessEmePort)

abstract add(*, `type`: Literal['fdtd_port'], `name`: str, `property`: PostProcessFdtdPort)

### Usage

`Add a port to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td> Port name</td>
  </tr>
  <tr>
    <td>type</td>
    <td style={{width: '50rem'}}>Port type.
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td> Port property</td>
  </tr>
</table>

<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

