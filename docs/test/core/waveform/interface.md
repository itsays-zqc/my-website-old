
# interface

## WaveformInterface

```py
class maxoptics_sdk.core.waveform.interface.WaveformInterface(*args, **kwargs)
```
__Bases__: Protocol

-------
__add__(*, name: str, wavelength_center: float, wavelength_span: float, unit: Literal['um', 'nm'] = 'um')
__add__(*, name: str, wavelength_min: float, wavelength_max: float, unit: Literal['um', 'nm'] = 'um')
__add__(*, name: str, frequency_center: float, frequency_span: float)
__add__(*, name: str, frequency_min: float, frequency_max: float)

----------

Add a project waveform.

<table>
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Waveform name</td>
  </tr>
  <tr>
    <td>kwargs</td>
    <td>Waveform data</td>
  </tr>
</table>


    wv = pj.Waveform()
    wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)