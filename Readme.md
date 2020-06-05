# eslint-plugin-no-snapshot-testing
Snapshot tests ... yuck.

## **Installation**
Run `npm i eslint-plugin-no-snapshot-testing --save-dev`

## **Usage**
Add `no-snapshot-testing` to your `.eslintrc` file.

```
{
    "plugins": "no-snapshot-testing"
}
```
and

```
{
    "rules": {"no-snapshot-testing/no-snapshot-testing": "error"}
}
```
from now on all `toMatchSnapshot` and `toMatchInlineSnapshot` calls will be disallowed and removed with fix run.

![](https://media.giphy.com/media/3oEduY2IBr0s8AdrIk/giphy.gif)
