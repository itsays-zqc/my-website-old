# maxoptics_sdk.helper 

## maxoptics_sdk.helper.json_load(file_path)
## maxoptics_sdk.helper.timed(f: Callable[..., R]) → Callable[..., R]

Add timer prints for wrapped function.



<table class="custom-table">
  <tr>
    <td>Parameters</td>
    <td>f-Function</td>
  </tr>
  <tr>
    <td>Returns</td>
    <td>Wrapped function</td>
  </tr>
</table>

    @timed
    def f():
        import time
        time.sleep(1)
    f()
    [Finished in 0.02 mins]


## maxoptics_sdk.helper.with_path(f: Callable[..., R]) → Callable[..., R]

Add path input path keyword-argument for wrapped function. Value is file’s directory path.

<table class="custom-table">
  <tr>
    <td>Parameters</td>
    <td>f-Function</td>
  </tr>
  <tr>
    <td>Returns</td>
    <td>Wrapped function</td>
  </tr>
</table>

    @with_path
    def f(*, path):
        return path
    f()