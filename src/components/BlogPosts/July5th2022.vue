<template>
	<h2>Blog Post Two</h2>
	<time datetime="2022-07-05">July 5th 2022</time>
	<p>By Jacob Sullivan</p>
	<p>
		For this example post I am going to make it extremely long so that it
		overflows the page. In that way I can style it properly. What I will need to
		ultimately do is set an overflow-y property and set it to scroll probably. I
		might need to set a max height. One thing I haven't thought about yet is
		mobile styling. I've set a width on the blog nav that I imagine won't do
		well on mobie devices. I'll have to test that and tweak it. Maybe set a
		breakpoint to put the nav on top of the article when it makes sense to.
	</p>
	<p>
		For internationalization, I think I'm going to have a separate file per blog
		post. In that way we won't have an exploding i18n file like Omnitracs Drive
		did. I don't think this will ever be read in Spanish. And I hope the
		translations don't get too mangled. And I hope having a Spanish translation
		doesn't give anyone the idea that I know Spanish, beacuse I don't.
	</p>
	<p>
		I need to think about what I want to blog about. I know I don't want to
		stick to a specific theme. Is it a mistake to put this effort in without
		having a couple of post ideas? Maybe I just like the idea of having a blog,
		but not writing one. I do come up with good idea from time to time. Not just
		ideas I think are good, but ones I'm pretty sure I'm good. My mistake is not
		writing them down. I should carry around a notepad. I own too many notepads,
		time to put them to use.
	</p>
	<p>
		Sitting down and writing feels good, even if its just this flow of nonsense
		coming out of my head. I bet writing my first blog post will feel good. I'm
		not sure if I want to try and promote it. I think I just want it to be my
		corner of the internet where I put things out there. Whether or not people
		actually read this stuff is not important.
	</p>
	<p>
		Anyway, I've written quite a bit. I should check if this is enough content
		to overflow the container.
	</p>
	<p>
		Update, it is not enough to overflow the container. I know I could just
		shrink the browser, or increase the font size, or decrease the size of the
		container, but I just feel like writing random gibberish. Is it gibberish if
		it is understandable but has no point? I need to read more. My theory is
		reading more will improve writing skill. My vocabulary is okay. I don't want
		to use big fancy words.
	</p>
	<p>
		We are getting to the point where there is enough writing to overflow the
		container. Making this last paragraph particularly beefy will do it. Doing
		this without a CMS will be great I feel. A CMS is great for conveniency. Is
		conveniency a word? I just checked Google, it is. I'm watching Pestily play
		Escape from Tarkov. He's on Customs and getting swarmed by scavs. Doing this
		without a CMS will allow me to be more creative with the styling and the
		animations and such. I don't know if I'll get fancy from the start. I think
		I'll just try things one by one and build up a style.
	</p>
	<p>
		I've gotten the styling done. I needed to set overflow-y: scroll; on the
		article. As well as taking the height of the page title in the blog-content
		div to keep that div overflowing its container.
	</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "July4th2022"
});
</script>
