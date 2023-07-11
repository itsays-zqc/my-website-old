# maxoptics_sdk.core.monitors.interface module

```py
class 
maxoptics_sdk.core.monitors.interface.MonitorInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
## 1. add_anisotropy

### Syntax

abstract add(*, `type`: Literal['electric_monitor'], `name`: str, `property`: PostProcessElectricMonitor)
abstract add(*, `type`: Literal['current_monitor'], `name`: str, `property`: PostProcessCurrentMonitor)
abstract add(*, `type`: Literal['charge_monitor'], `name`: str, `property`: PostProcessChargeMonitor)
abstract add(*, `type`: Literal['band_monitor'], `name`: str, `property`: PostProcessBandMonitor)
abstract add(*, `type`: Literal['profile_monitor'], `name`: str, `property`: PostProcessProfileMonitor)
abstract add(*, `type`: Literal['global_monitor', 'global_option'], `name`: str, `property`: PostProcessGlobalMonitor)
abstract add(*, `type`: Literal['time_monitor'], `name`: str, `property`: PostProcessTimeMonitor)
abstract add(*, `type`: Literal['power_monitor'], `name`: str, `property`: PostProcessPowerMonitor)
abstract add(*, `type`: Literal['mode_expansion'], `name`: str, `property`: PostProcessModeExpansion)

### Usage

`Add a monitor to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Monitor name</td>
  </tr>
  <tr>
    <td>type</td>
    <td style={{width: '50rem'}}>Monitor type.
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td>Monitor property</td>
  </tr>
</table>

<br/>
<table class="custom-table">
  <tr>
    <td class="typeface">Returns:&nbsp &nbsp;&nbsp;&nbsp;</td>
    <td class="typeface">No return.</td>
  </tr>
</table>

<!-- ### Example

```py
mt = pj.Material()
mt.add_anisotropy(name="LN", fitting=None,
      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2
      )
``` -->









