"use strict"

// emojify returns the corresponding emoji image
const emojify = (name) => {
	let out = `<img src="emojis/` + name + `.png">`;
	return out;
}

// rand returns a random item from an array
const rand = (...arr) => {
	let x = Math.floor(Math.random() * arr.length);
	return arr[x];
}

var app = new Vue({
	el: ".app",
	data: {
		cat: emojify("box"),
		alive_cats: [
			emojify("cat--smile"),
			emojify("cat--cheer"),
			emojify("cat--laugh"),
			emojify("cat--love" ),
			emojify("cat--smirk"),
			emojify("cat--kiss" ),
			emojify("cat--fear" ),
			emojify("cat--sad"  ),
			emojify("cat--mad"  )
		],
		dead_cats: [
			emojify("crossbones"),
			emojify("skull")
		],
	},
	methods: {
		// is_open returns whether the box is open
		is_open: function() {
			return this.cat != emojify("box");
		},
		// is_alive returns whether the cat is alive
		is_alive: function() {
			return (
				this.cat != emojify("crossbones") &&
				this.cat != emojify("skull"     )
			);
		},
		// quantum_fluctuation observes whether the cat is alive or dead
		quantum_fluctuation: function() {
			if (this.is_open()) {
				this.cat = emojify("box");
				return;
			};
			this.cat = rand(
				rand(...this.alive_cats),
				rand(...this.dead_cats )
			);
        },
        jittering: function() {
            return {
                jitter: this.is_alive()
            };
        },
        theme: function() {
            return {
                "rheme--alive": this.is_open() && this.is_alive(),
                "theme--dead": !this.is_alive()
            }
        }
	}
})