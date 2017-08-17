# Angular drag and drop track by fix
This is a work around for using `track by` with `ng-repeat` when using https://github.com/marceljuenemann/angular-drag-and-drop-lists.

The directive incorrectly positions list items when using track by expression or index with `ng-repeat`.
The work around uses the `dnd-drop` callback to manually add and remove the items at the correct indexes.