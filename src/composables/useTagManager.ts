import { ref, computed } from 'vue';
import { type WorkItemData } from '../components/WorkItem.vue';
import data from '../assets/data.json';
console.log('what is data?', data);

const currentTag = ref('');
const filteredItems = computed<WorkItemData[]>(() => {
	let list = data.items as unknown as WorkItemData[];
	if (currentTag.value) {
		list = list.filter((item) => {
			return item.tags.includes(currentTag.value);
		});
	}
	return list;
});

export default () => {
	return { currentTag, filteredItems };
};
