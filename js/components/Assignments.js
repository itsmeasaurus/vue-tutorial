import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <form @submit.prevent="add">
                <div class="text-black border border-gray-600">
                    <input v-model='newAssignment' placeholder="New Assignment ..." class="p-2"/>
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name: 'Finish Project', complete: false, tag: 'math'},
                { id:2, name: 'Read Chapter 4', complete: false, tag: 'science'},
                { id:3, name: 'Turn in homework', complete: false, tag: 'math'},
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add() {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: this.newAssignment,
                complete: false
            })
            this.newAssignment = ''
        }
    }
}