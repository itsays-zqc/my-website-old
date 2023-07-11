# maxoptics_sdk.core.structure.run_index_typing module

[maxoptics_sdk.core.structure.run_index_typing.RunIndex](#maxoptics_sdk.core.structure.run_index_typing.RunIndex)



[maxoptics_sdk.core.structure.run_index_typing.RunIndexGeometry](#maxoptics_sdk.core.structure.run_index_typing.RunIndexGeometry)



<span id='maxoptics_sdk.core.structure.run_index_typing.RunIndex'> </span>

```py
class maxoptics_sdk.core.structure.run_index_typing.RunIndex(*args, **kwargs)
```

__Bases__: dict

__geometry__: RunIndexGeometry




<span id='maxoptics_sdk.core.structure.run_index_typing.RunIndexGeometry'> </span>


```py
class maxoptics_sdk.core.structure.run_index_typing.RunIndexGeometry(*args, **kwargs)
```




__Bases__: dict


<table>
  <tr>
    <td>monitor_type</td>
    <td>Literal['2d_x_normal', '2d_y_normal', '2d_z_normal']</td>
    <td>The type of monitor</td>
  </tr>
  <tr>
    <td>x</td>
    <td>float | int</td>
    <td>The value of x</td>
  </tr>
  <tr>
    <td>x_span</td>
    <td>float | int</td>
    <td>The span of x</td>
  </tr>
  <tr>
    <td>y</td>
    <td>float | int</td>
    <td>The value of y</td>
  </tr>
  <tr>
    <td>y_span</td>
    <td>float | int</td>
    <td>The span of y</td>
  </tr>
  <tr>
    <td>z</td>
    <td>float | int</td>
    <td>The value of z</td>
  </tr>
  <tr>
    <td>z_span</td>
    <td>float | int</td>
    <td>The span of z</td>
  </tr>
</table>
