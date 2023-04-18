import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    components: {Assignment,AssignmentTag},
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{title}}
                <span>{{ assignments.length}}</span>
            </h2>

            <assignment-tag
                :initialTags = "assignments.map(a=>a.tag)"
                :currentTag = "currentTag"
                @change = "currentTag = $event"
            >
            </assignment-tag>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },
    data() {
        return {
            'currentTag': 'all'
        }
    },
    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(assignment => assignment.tag === this.currentTag)
        },
    }
}