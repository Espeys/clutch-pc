<template lang="html">
    <div class="table-repsonsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.id">
                    <td>
                        <nuxt-link to="/account/invoice-detail">{{
                            item.invoiceId
                        }}</nuxt-link>
                    </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.dateCreate }}</td>
                    <td>Php {{ item.amount }}</td>
                    <td>{{ item.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableInvoices',
    data() {
        return {
            tableData: [
                {
                    id: '1',
                    invoiceId: '593347935',
                    title: 'Xbox One Wireless Controller Black Color',
                    dateCreate: '20-1-2021',
                    amount: '10,099.99',
                    status: 'Cancel'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
