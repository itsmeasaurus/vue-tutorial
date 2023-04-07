export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 px-5 py-5 border rounded disabled:cursor-not-allowed" :disabled="processing">
            <slot/>
        </button>
    `,
    data() {
        return {
            processing: false
        }
    }
}