# maxoptics_sdk.core.structure.post_process_triangle_property_typing module

```py
class maxoptics_sdk.core.structure.post_process_triangle_property_typing.PostProcessRectanglePropertyMaterial(*args, **kwargs)
```

Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    </tr>
    <tr>
        <td>material</td>
        <td>Material</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>mesh_order</td>
        <td>int</td>
        <td>check: &gt;=0</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
<br/>

```py
class maxoptics_sdk.core.structure.post_process_triangle_property_typing.PostProcessRectanglePropertyGeometry(*args, **kwargs)
```
Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>point_1_x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>point_1_y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>point_2_x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>point_2_y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>point_3_x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>point_3_y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>rotate_x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 0</td>
    </tr>
    <tr>
        <td>rotate_y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 0</td>
    </tr>
    <tr>
        <td>rotate_z</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 0</td>
    </tr>
    <tr>
        <td>x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>z</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>z_max</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td></td>
    </tr>
    <tr>
        <td>z_min</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td></td>
    </tr>
    <tr>
        <td>z_span</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled, check: &gt;0</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
<br/>

```py
class maxoptics_sdk.core.structure.post_process_triangle_property_typing.PostProcessRectangleProperty(*args, **kwargs)
```

Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Property</th>
        <th>Type</th>
    </tr>
    <tr>
        <td class="third-column">geometry</td>
        <td class="fourth-column">PostProcessTrianglePropertyGeometry</td>
    </tr>
    <tr>
        <td>material</td>
        <td>PostProcessTrianglePropertyMaterial</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
