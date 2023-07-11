<table>
  <tr>
    <th>domain_1</th>
    <td>str</td>
  </tr>
  <tr>
    <th>domain_2</th>
    <td>str</td>
  </tr>
  <tr>
    <th>infinite_recombination</th>
    <td>bool  <!-- default: true --></td>
  </tr>
  <tr>
    <th>interface_type</th>
    <td>Literal["null", "InsulatorInterface", "HomoJunction", "HeteroJunction", "MetalOhmicInterface", "SolderPad"]  <!-- default: null --></td>
  </tr>
  <tr>
    <th>material_1</th>
    <td>Material</td>
  </tr>
  <tr>
    <th>material_2</th>
    <td>Material</td>
  </tr>
  <tr>
    <th>surface_type</th>
    <td>Literal["domain_domain", "material_material"]  <!-- default: domain_domain --></td>
  </tr>
  <tr>
    <th>velocity_electron</th>
    <td>Union[float, int, FloatParameter, FloatParameterExpression]  <!-- default: 0 --></td>
  </tr>
  <tr>
    <th>velocity_hole</th>
    <td>Union[float, int, FloatParameter, FloatParameterExpression]  <!-- default: 0 --></td>
  </tr>
</table>
