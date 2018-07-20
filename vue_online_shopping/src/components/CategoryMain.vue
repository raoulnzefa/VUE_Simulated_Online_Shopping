<template>
    <div>
        <main class="category_content">
            <CategoryLeftView></CategoryLeftView>
            <CategoryRightView></CategoryRightView>
        </main>
        

    </div>
    
</template>

<script>
    import CategoryLeftView from './CategoryLeft';
    import CategoryRightView from './CategoryRight';
export default {
    components:{
        CategoryLeftView,
        CategoryRightView

    }
}
</script>