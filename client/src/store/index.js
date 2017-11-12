import { autorun, observable, computed, action } from 'mobx';

class TaskStore {
    constructor(daysBefore, name="", description="") {
        this.daysBefore = daysBefore;
        this.name = name;
        this.description = description;
    }
    @observable name = ""
    @observable description = "";
    @observable daysBefore;
}

const testTasks = [new TaskStore(30, "Hire workers for demo"),
        new TaskStore(20, "Shop for materials"),
        new TaskStore(10, "Hire contractors for install"),
        new TaskStore(3, "Post on Zillow"),
        new TaskStore(0, "Show house")]

class TemplateStore {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    @observable id
    @observable name
    @observable tasks = [
        
    ];

    @action addTask() {
        this.tasks.push(new TaskStore(this.tasks.length ? this.tasks[this.tasks.length - 1].daysBefore : 0));
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
    ];

    @observable saving = false;
    @observable loading = false;

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

    @action saveTemplate(template) {
        this.saving = true;
        setTimeout(() => {
            this.saving = false;
        }, 1000);
    }
}

window.store = new AppStore();

autorun(() => console.log('The task collection length is', window.store.activeTemplate.tasks.length));

export default window.store;