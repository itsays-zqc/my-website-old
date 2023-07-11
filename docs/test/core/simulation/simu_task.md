# maxoptics_sdk.core.simulation.simu_task.interface module

```py
class 
maxoptics_sdk.core.simulation.simu_task.interface.BeamResult(task_id: int | str, task_path: str, mode_area:

FDEBeamResultHandler.ModeAreaResult, props: Dict[str, Any], chart: TaskFile)

```

Bases: **object**

## parameter

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>chart</td>
    <td>TaskFile</td>
  </tr>
  <tr>
    <td>mode_area</td>
    <td>FDEBeamResultHandler.ModeAreaResult</td>
  </tr>
  <tr>
    <td>props</td>
    <td>Dict[str, Any]</td>
  </tr>
  <tr>
    <td>task_id</td>
    <td>int | str</td>
  </tr>
  <tr>
    <td>task_path</td>
    <td>str</td>
  </tr>
</table>


## SimulationTaskInterface
``` py
class
maxoptics_sdk.core.simulation.simu_task.interface.SimulationTaskInterface(*args, **kwargs)
```
Bases: **Protocol**

### Syntax

abstract **build()** → Tuple[MosProject, Dict[str, bool]]

**props:** Dict[str, Any]

abstract **run()** → SimulationResultInterface

**Returns:** Simulation result manager.

abstract **run_doping**(`name`: str, `property`: RunDopingPostProcess, `norm`: str, `scale`: str, `superimpose`: bool, `show`: bool, `material_list`: list, `cmin`: float, `savepath`: str) → *SimulationTaskInterface*

### Usage

Run doping.

### Parameters and Returns


<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>property</td>
    <td>Doping preview properties. See below</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Doping preview name.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Show figure or not. Default as False.</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Save path for picture. Required.</td>
  </tr>
  <tr>
    <td>norm</td>
    <td>Colorbar normalization. Selections are ['linear', 'log']. Default as 'linear'.</td>
  </tr>
  <tr>
    <td>scale</td>
    <td>Scale type. Selections are ['equal', 'auto']. Default as 'equal'.</td>
  </tr>
  <tr>
    <td>superimpose</td>
    <td>Superimpose doping on structure or not. Default as True.</td>
  </tr>
  <tr>
    <td>material_list</td>
    <td>Specified material type list. Default as [].</td>
  </tr>
  <tr>
    <td>region_list</td>
    <td>Specified region name list. Default as []. Superior to material_list when not empty.</td>
  </tr>
  <tr>
    <td>cmax</td>
    <td>Maximum concentration of heatmap colorbar. Default as None.</td>
  </tr>
  <tr>
    <td>cmin</td>
    <td>Minimum concentration of heatmap colorbar. Default as None.</td>
  </tr>
</table>
<br/>


## RUN_DOPING

<table>
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.dimension</td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal'].</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td>float</td>
    <td></td>
  </tr>
</table>
