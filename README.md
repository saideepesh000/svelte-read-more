
# Svelte Read More

A small & simple svelte component to render text dynamically using `read more` or `show more` & `read less` or `show less` (similar) labels

## Installation

`npm i svelte-read-more`

## Usage 

### Basic

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent = {content} maxChars={10}/>
```

### Override Labels

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxChars={10} readMoreLabel='Show more' readLessLabel='Show less'/>
```

### Override dot-dot-dot

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxChars={10} dotDotDot='---'/>
```