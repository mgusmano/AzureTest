Ext.define('AzureTest.view.tableform.TableFormView',{
    extend: 'Ext.form.Panel',
    xtype: 'tableformview',

    //controller: "tableform-tableformview",
    //viewModel: {
    //    type: "tableform-tableformview"
    //},

    setActiveRecord: function (record) {
        this.activeRecord = record;
        if (record) {
            //this.down('#save').enable();
            this.getForm().loadRecord(record);
        } else {
            //this.down('#save').disable();
            this.getForm().reset();
        }
    },



    initComponent: function () {
        Ext.apply(this, {
            activeRecord: null,
            iconCls: 'icon-user',
            frame: true,
            title: 'User -- All fields are required',
            defaultType: 'textfield',
            bodyPadding: 5,
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'right'
            },
            items: [
                {
                    fieldLabel: 'id',
                    name: 'id'
                    //allowBlank: false,
                    //vtype: 'id'
                },
                {
                    fieldLabel: 'day',
                    name: 'day',
                    //allowBlank: false
                },
                {
                    fieldLabel: 'active',
                    name: 'active',
                    //allowBlank: false
                }
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: ['->', {
                    iconCls: 'icon-save',
                    itemId: 'save',
                    text: 'Save',
                    disabled: true,
                    scope: this,
                    handler: this.onSave
                }, {
                    iconCls: 'icon-user-add',
                    text: 'Create',
                    scope: this,
                    handler: this.onCreate
                }, {
                    iconCls: 'icon-reset',
                    text: 'Reset',
                    scope: this,
                    handler: this.onReset
                }]
            }]
        });
        this.callParent();
    }

});
