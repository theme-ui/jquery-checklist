# jQuery Checklist
jQuery Checklist turn multiple `<select>` form control into checkboxes.

# Dependencies
* jquery
* jquery.ui/core
* semantic-ui/checkbox
* vue

# Usage
## HTML
```html
<select multiple class="ui checklist" name="dict[]">
    <option class="item" value="1" selected>General</option>
    <option class="item" value="2">Fundamental Analysis</option>
    <option class="item" value="3">Technical Analysis</option>
    <option class="item" value="4">Quantitative Analysis</option>
    <option class="item" value="5">MT4 / MT5</option>
</select>
```

## JavaScript
```javascript
$('.ui.checklist').checklist();
```

# Todo List
- [ ] Add Select all, Deselect all actions.
- [ ] More robust API with options.
