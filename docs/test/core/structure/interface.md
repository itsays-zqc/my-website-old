# maxoptics_sdk.core.structure.interface module

```py
class maxoptics_sdk.core.structure.interface.GdsExportTableData(*args, **kwargs)
```

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td>datatype</td>
    <td>int</td>
  </tr>
  <tr>
    <td class="first-coluumn">layer</td>
    <td class="second-column">int
    </td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>float</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>float</td>
  </tr>
</table>

- Bases: **dict**
  
```py
class maxoptics_sdk.core.structure.interface.StructureInterface
```

- Bases: **object**

### Example

```py
None
```

## STRUCTURE_PROPERTY 
<!-- 1 -->

## 1. EBoundary and OBoundary

### Syntax

abstract EBoundary(*, `property`: StructureEBoundaryPropertyDict)
Not Implemented

abstract OBoundary(*, `pml_same_settings`: bool = True, `property`: OBoundarySameSettingsPostProcess | OBoundaryNotSameSettingsPostProcess)

### Usage

`Add a set of default optical boundary’s property to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>property</td>
    <td>Default optical boundary property.</td>
  </tr>
  <tr>
    <td class="first-coluumn">pml_same_settings</td>
    <td class="second-column">Use same pml settings on every directions or not.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## OBOUNDARY_SAME_SETTINGS
<!-- 2 -->

## OBOUNDARY_NOT_SAME_SETTINGS
<!-- 3 -->

## 2. add_doping

### Syntax

abstract add_doping(*, `name`: str, `type`: Literal['p', 'n', 'file'], `property`: StructureDopingPropertyDictUsingFile | StructureDopingPropertyDictUsingNP | StructureDopingPropertyDictUsingNPVolume)

### Usage

`Add a set of default optical boundary’s property to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Doping name</td>
  </tr>
  <tr>
    <td class="first-coluumn">type</td>
    <td class="second-column">Doping type
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td>Doping property</td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## FILE
<!-- 4 -->
## N/P
<!-- 5 -->
## 3. add_electrode

### Syntax

abstract add_electrode(*, `name`: str, `property`: StructureElectrodeProperty)

### Usage

`_summary_`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Electric boundary condition name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property </td>
    <td class="second-column">Electric boundary condition property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## STEADY_STATE
<!-- 6 -->
## SSAC
<!-- 7 -->
## TRANSIENT
<!-- 8 -->
## 4. add_emesh

### Syntax

abstract add_emesh(*, `name`: str, `property`: Dict[str, Any])

### Usage

`Add electric mesh.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Electric local mesh name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Electric local mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_EMESH
<!-- 9 -->
## 5. add_emesh_along_line

### Syntax

abstract add_emesh_along_line(*, `name`: str, `property`: Dict[str, Any])

### Usage

`Add electric mesh along line.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Electric local mesh name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Electric local mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_EMESH_ALONG_LINE
<!-- 10 -->
## 6. add_geometry

### Syntax

abstract add_geometry(*, `name`: str, `type`: str, `property`: StructureGeometryPropertyDict)

### Usage

`Add a geometry(structure) to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Geometry name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">type</td>
    <td class="second-column">Geometry type.
    </td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Geometry property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## GDS_FILE_PROPERTY
<!-- 11 -->
## GDS_FILE3D_PROPERTY
<!-- 12 -->
## ARC_WAVEGUIDE_PROPERTY
<!-- 13 -->
## ARC_WAVEGUIDE_3D_PROPERTY
<!-- 14 -->
## BEZIER_CURVE_PROPERTY
<!-- 15 -->
## BEZIER_CURVE_3D_PROPERTY
<!-- 16 -->
## CIRCLE_PROPERTY
<!-- 17 -->
## CUSTOM_POLYGON_PROPERTY
<!-- 18 -->
## ELLIPSE_PROPERTY
<!-- 19 -->
## LINEAR_TRAPEZOID_PROPERTY
<!-- 20 -->
## PYRAMID_PROPERTY
<!-- 21 -->
## ANALYTICAL_WAVEGUIDE_PROPERTY
<!-- 22 -->
## RECTANGLE_PROPERTY
<!-- 23 -->
## RING_PROPERTY
<!-- 24 -->
## SECTOR_PROPERTY
<!-- 25 -->
## TRIANGLE_PROPERTY
<!-- 26 -->
## TERRACE_PROPERTY
<!-- 27 -->
## 7. add_mesh

### Syntax

abstract add_mesh(*, `name`: str, `property`: PostProcessSubMesh)

### Usage

`Add sub mesh.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Mesh name.</td>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_MESH
<!-- 28 -->

## 8. add_surface_recombination

### Syntax

abstract add_surface_recombination(*, `name`: str, `property`: AddSurfaceRecombination)

### Usage

`Add surface recombination.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Surface recombination name.</td>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Surface recombination property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SURFACE_RECOMBINATION
<!-- 29 -->
## 9. export_gds

### Syntax

abstract export_gds(`filepath`: str, `top_cell`: str, `layers`: List[GdsExportTableData])

## 10. run_doping

### Syntax

abstract run_doping(*args, **kwargs)

### Usage

`Not Implemented yet.`

## 11. structure_show

### Syntax

abstract structure_show(*, `mode`='XY', `show`: bool, `savepath`: str, `fig_type`: Literal['png', 'svg'] = 'png', `simulation_name`: str | None = None, `disabled_components`: Tuple[Literal['materials', 'helpers', 'box', 'box.coordinate', 'box.cavity', 'ModeSource', 'PowerMonitor', 'ProfileMonitor', 'FDTDPortGroup'], ...] = (), `xyratio`=(1, 1), `celldisplay`=False)

### Usage

`Show Structure. If there are Pyramid or ArcWaveguide3D type geometry in current Structure manager, this method is invalid.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>mode</td>
    <td>Show mode.</td>
  <tr>
    <td class="first-coluumn">show</td>
    <td class="second-column">Whether to show the picture. If set to False, the picture will be saved instead.
    </td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Picture save path.</td>
  <tr>
  <tr>
    <td>fig_type</td>
    <td>Picture suffix(type).</td>
  <tr>
  <tr>
    <td>simulation_name</td>
    <td>Simulation name.</td>
  <tr>
  <tr>
    <td>disabled_components</td>
    <td>Disable components from showing.</td>
  <tr>
  <tr>
    <td>xyratio</td>
    <td>Zoom multiplier of x and y direction.</td>
  <tr>
  <tr>
    <td>celldisplay</td>
    <td>Whether to show eme cells.</td>
  <tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```
