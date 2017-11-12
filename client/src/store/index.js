import { autorun, observable, computed, action } from 'mobx';

class TaskStore {
    @observable name = "Call plumber"
    @observable description = "Some descriptoin here";
    @observable daysBefore = 3
}

class TemplateStore {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    @observable id
    @observable name
    @observable tasks = [
        new TaskStore()
    ];

    @action addTask() {
        this.tasks.push(new TaskStore());
    }

    @action deleteTask(task) {
        this.tasks.remove(task);
    }
}

class AppStore {
    @observable user
    
    @observable activeTemplateId = 0;
    @observable templateList = [
        new TemplateStore('123','Flip House'),
        new TemplateStore('456', 'Rennovate Kitchen'),
    ];

    @computed get activeTemplate() {
        return this.templateList[this.activeTemplateId];
    }

    @action addTemplate() {
        console.log('adding template');
        const newTemplate = new TemplateStore('567', "New Template");
        this.templateList.push(newTemplate);
        this.activeTemplateId = this.templateList.length - 1;
    }

    @action selectTemplate(selectedTemplate) {
        console.log('selected', selectedTemplate);
        this.templateList.forEach((template, index) => {
            if (template.id === selectedTemplate.id) {
                this.activeTemplateId = index;
            }
        });
    }
}

window.store = new AppStore();

autorun(() => console.log('The task collection length is', window.store.activeTemplate.tasks.length));

export default window.store;