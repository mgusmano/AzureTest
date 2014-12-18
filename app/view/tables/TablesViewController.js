Ext.define('AzureTest.view.tables.TablesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tablesviewcontroller',

    onSelectionChange: function (selModel, selected) {
        var form = this.lookupReference('form').form;
        if (selected[0] != undefined) {
            var record = selected[0];
            this.getView().setActiveRecord(record);
            form.loadRecord(record);
        }
        else {
            form.reset();
        }
    },

    onSaveClick: function () {
        var view = this.getView();
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        var form = this.lookupReference('form').form;
        if (this.getView().getActiveRecord() != null) {
            form.updateRecord(this.getView().getActiveRecord());
            this.getView().setActiveRecord(null);
            store.sync();
            var selected = grid.getSelectionModel().deselectAll(true);
            form.reset();
        }
    },

    onSyncButton: function () {
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        store.sync();
    },

    onAddClick: function () {
        var view = this.getView();
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        var form = this.lookupReference('form').form;
        var rec = Ext.create(view.config.tableName, form.getValues());
        store.insert(0, rec); //insert at the top
        store.sync();
        form.reset();
    },

    onDeleteClick: function () {
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        var form = this.lookupReference('form').form;
        var selected = grid.getSelectionModel().getSelection();
        if (selected[0] != undefined) {
            var aRecord = store.getById(selected[0].data.id)
            Ext.Msg.confirm("Delete", "Delete Record?", function (button) {
                if (button == 'yes') {
                    try {
                        store.remove(aRecord);
                        store.sync();
                        form.reset();
                    }
                    catch (e) {
                        alert(e);
                    }
                }
            });
        }
    },
    
    getModel: function (tableName, fields) {
        var model = Ext.define(tableName, {
            extend: 'Ext.data.Model',
            idProperty: 'id',
            useCache: false,
            fields: fields,
            proxy: {
                type: 'azure',
                tableName: tableName,
                enablePagingParams: true
            }
        });
        return model;
    }

});