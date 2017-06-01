<template lang="html">
	<!-- 音乐播放控制条  全局组件 -->
	<div class="controlbar">
		<div class="controlbar-wrap">
			<!-- 播放、暂停、上一首、下一首等按钮组 -->
			<div class="btns">
				<a href="#" class="prev" v-on:click.prevent="playprev">上一首</a>
				<a href="#" v-bind:class="isPlay" v-on:click.prevent="playmusic">播放/暂停
					<audio autoplay="autoplay" v-bind:src='src' id="audio" v-on:ended='autoplaynext' v-on:play="playIcon">

					</audio>
				</a>
				<a href="#" class="next" v-on:click.prevent="playnext">下一首</a>
			</div>
			<!-- 播放、暂停、上一首、下一首等按钮组 end-->

			<!-- 歌单或歌曲图片 -->
			<div class="play-img">
			<img :src='thismusic.img' />
				<a href="#"></a>
			</div>
			<!-- 歌单或歌曲图片 end -->

			<!-- 歌单或歌曲信息进度条 -->
			<div class="play-progress">
				<div class="words">
					<a href="#" class="song">{{thismusic.songname}} </a>
					<span class="author">
						<a href="#">{{thismusic.author}}</a>
					</span>
				</div>
				<div class="m-pbar">
					<div class="p-bar">
						<div class="rdy"></div>
						<div class="cur">
							<span><i></i></span>
						</div>
					</div>
					<div class="time">
						<em>00:17</em>
						/ 04:19
					</div>
				</div>
			</div>
			<!-- 歌单或歌曲信息进度条 end -->

			<!-- 收藏、分享按钮 -->
			<div class="oper">
				<a href="#" class="store">收藏</a>
				<a href="#" class="share">分享</a>
			</div>
			<!-- 收藏、分享按钮 end -->

			<!-- 静音、播放列表等按钮 -->
			<div class="ctrl">
				<!-- 声音大小调节  -->
				<div class="m-vol">
					<!-- <div class="vol-bg"></div> -->
					<div class="vbg">
						<!-- <div class="vol-cur"></div> -->
						<!-- <span class="vol-btn"></span> -->
					</div>
				</div>
				<!-- 声音大小调节 end -->
				<a href="#" class="vol-ctrl"></a>
				<a href="#" class="icn-one"></a>
				<span href="#" class="seelists">
					<a href="#">10首</a>
				</span>
			</div>
			<!-- 静音、播放列表等按钮 end-->

			<!-- 播放列表 -->
			<div class="p-lists">
				<div class="p-title">
					<h3>播放列表</h3>
					<span class="p-close">x</span>
				</div>
				<div class="p-content">

				</div>
			</div>
			<!-- 播放列表 end -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'controlbar',
	data(){
		return {
			isPlay: 'play',
			index: 0
		}
	},
	ready() {
		this.audio = document.getElementById("audio");
	},
	methods: {
		playmusic(){      // 点击暂停、播放按钮，播放或暂停音乐
			if(audio.paused) {
					audio.play();
					this.isPlay = 'stop';
					return;
				}
				audio.pause();
				this.isPlay = 'play';
		},
		autoplaynext(){   // 在用户没有点击的情况下，自动播放歌单的下一首音乐
			this.$store.commit('playlist', this.lists[this.index+1]);
			this.index += 1;
		},
		playIcon(){      // 当音乐播放时，控制条的图标变成暂停
			this.isPlay = 'stop';
		},
		playprev(){      // 点击按钮播放上一首
			if(this.index == 0){
				alert('这是第一首');
				this.$store.commit('playlist', this.lists[0]);
			}else{
				this.$store.commit('playlist', this.lists[this.index-1]);
				this.index -= 1;
			}
		},
		playnext(){      // 点击按钮播放下一首
			if(this.index == (this.lists.length-1)){
				alert('这是最后一首');
				this.$store.commit('playlist', this.lists[this.lists.length-1]);
			}else {
				this.$store.commit('playlist', this.lists[this.index+1]);
				this.index += 1;
			}
		},
		playthis(item, index){    // 点击某首歌曲播放音乐
			this.$store.commit('playlist', item);
			this.index = index;
			// console.log(item);
		}
	},
	computed: {
		playlistsMsg(){
			return this.$store.state.index.playlistsMsg;
		},
		lists(){
			return this.$store.state.index.lists;
		},
		playlist(){
			return this.$store.state.index.playlist;
		},
		thismusic(){
		return this.$store.state.thismusic
	},
		src(){
		return this.$store.state.src
   }
}
}
</script>

<style lang="css" scoped>
	.controlbar{
		position: fixed;
		bottom: 0;
		height: 54px;
		background: url('../../static/img/playbar.png') repeat-x;
		width: 100vw;
		z-index: 1111;
		line-height: 54px;
		/*background-color: #2F2C2C;*/
	}
	.controlbar .controlbar-wrap{
	    width: 980px;
	    height: 47px;
		margin: 6px auto;
		position: relative;
	}

	/*播放、暂停、上一首、下一首 按钮组*/
	.btns{
		float: left;
		padding: 6px 0 0 0;
	}
	.btns .prev, .btns .next{
		display: inline-block;
		vertical-align: middle;
		font-size: 0;
		background: url('../../static/img/playbar.png') no-repeat;
		width: 28px;
	    height: 28px;
	    margin-right: 5px;
	    margin-top: 5px;
	}
	.btns .prev{
		background-position: 0 -130px;
	}
	.btns .prev:hover{
		background-position: -30px -130px;
	}
	.btns .next{
		margin-left: 5px;
		background-position: -80px -130px;
	}
	.btns .next:hover{
		background-position: -110px -130px;
	}
	.play{
		width: 36px;
    	height: 36px;
		display: inline-block;
		vertical-align: middle;
		font-size: 0;
		background: url('../../static/img/playbar.png') no-repeat 0 -204px;
	}
	.play:hover{
		background-position: -40px -204px;
	}
	.stop{
		width: 36px;
    	height: 36px;
		display: inline-block;
		vertical-align: middle;
		font-size: 0;
		background: url('../../static/img/playbar.png') no-repeat 0px -165px;
	}

	/* 歌单或歌曲图片 */
	.play-img{
		float: left;
		margin: 6px 15px 0 15px;
		width: 34px;
		height: 34px;
		position: relative;
	}
	.play-img img{
		width: 34px;
    	height: 34px;
	}
	.play-img a{
		position: absolute;
	    top: 0px;
	    left: 0px;
	    display: block;
	    width: 34px;
	    height: 35px;
		background: url('../../static/img/playbar.png') no-repeat 0 -80px;
	}

	/* 进度条 */
	.play-progress{
		float: left;
		width: 608px;
		height: 47px;
	}
	.play-progress .words{
		height: 20px;
	    overflow: hidden;
	    color: #e8e8e8;
	    text-shadow: 0 1px 0 #171717;
	    line-height: 28px;
		font-size: 12px;
	}
	.play-progress .words .song{
		color: #e8e8e8;
		max-width: 300px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
	}
	.play-progress .words .author{
		max-width: 220px;
	    margin-left: 15px;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	.play-progress .words .author a{
		color: #9b9b9b;
	}
	.play-progress .m-pbar{
		width: 600px;
		margin-top: 7px;
		position: relative;
	}
	.play-progress .m-pbar .p-bar{
		float: left;
		height: 9px;
		width: 493px;
		background: url('../../static/img/statbar.png') no-repeat right 0;
	}
	.play-progress .m-pbar .p-bar .rdy{
		height: 9px;
		width: 100%;
		background: url('../../static/img/statbar.png') no-repeat right -30px;
	}
	.play-progress .m-pbar .p-bar .cur{
		position: absolute;
	    top: 0;
	    left: 0;
		height: 9px;
		background: url('../../static/img/statbar.png') no-repeat left -66px;
		width: 20%;
	}
	.play-progress .m-pbar .p-bar .cur span{
		position: absolute;
	    top: -7px;
	    right: -13px;
	    width: 22px;
	    height: 24px;
	    margin-left: -11px;
		background: url('../../static/img/iconall.png') no-repeat 0 -250px;
	}
	.play-progress .m-pbar .time{
		float: left;
		margin-left: 15px;
		margin-top: -7px;
		color: #797979;
	}
	.play-progress .m-pbar .time em{
		color: #a1a1a1;
	}

	/*收藏、分享按钮*/
	.oper{
		float: left;
	}
	.oper a{
		display: inline-block;
		width: 25px;
	    height: 25px;
	    margin: 11px 2px 0 0;
		font-size: 0;
		background: url('../../static/img/playbar.png') no-repeat;
	}
	.oper .store{
		background-position: -88px -163px;
	}
	.oper .share{
		background-position: -114px -163px;
	}

	/*声音调节等按钮*/
	.ctrl{
		float: left;
		/*width: 113px;*/
    	padding-left: 13px;
		height: 47px;
		background: url('../../static/img/playbar.png') no-repeat -147px -238px;
		position: relative;
	}
	.ctrl .m-vol{
		position: absolute;
	    top: -113px;
	    left: 9px;
	    clear: both;
	    width: 32px;
	    height: 113px;
	}
	.ctrl .m-vol .vol-bg{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 32px;
	    height: 113px;
		background: url('../../static/img/playbar.png') no-repeat 0 -503px;
	}
	.ctrl .m-vol .vbg{
		position: absolute;
		padding: 4px 0;
    	top: 7px;
	    left: 14px;
	    width: 4px;
	    height: 93px;
	}
	.ctrl .m-vol .vbg .vol-cur{
		position: absolute;
		top: auto;
	    bottom: 4px;
	    left: 0;
		width: 4px;
		height: 80px;
		background: url('../../static/img/playbar.png') no-repeat -40px bottom;
	}
	.ctrl .m-vol .vbg .vol-btn{
		left: -7px;
	    display: block;
	    width: 18px;
	    height: 20px;
		position: absolute;
		background: url('../../static/img/iconall.png') no-repeat -40px -250px;
	}
	.ctrl .vol-ctrl{
		float: left;
	    width: 25px;
	    height: 25px;
	    margin: 15px 2px 0 0;
		background: url('../../static/img/playbar.png') no-repeat -2px -248px;
	}
	.ctrl .icn-one{
		float: left;
	    width: 25px;
	    height: 25px;
	    margin: 15px 2px 0 0;
		background: url('../../static/img/playbar.png') no-repeat -66px -344px;
	}
	.seelists{
		display: block;
	    width: 59px;
	    height: 50px;
		float: left;
	}
	.seelists a{
		margin-top: 15px;
		display: block;
		width: 59px;
		height: 30px;
		font-size: 12px;
		padding-left: 21px;
		line-height: 28px;
		text-align: center;
	    color: #666;
	    text-shadow: 0 1px 0 #080707;
		background: url('../../static/img/playbar.png') no-repeat -42px -68px;
	}

	/* 播放列表 */
	.p-lists{
		width: 555px;
		position: absolute;
		bottom: 47px;
		right: 0;
		border-radius: 5px;
		display: none;
	}
	.p-lists .p-title {
		height: 40px;
		padding: 0 20px;
		position: relative;
		background: url('../../static/img/playlist_bg.png') no-repeat -5px 0;
	}
	.p-lists .p-title h3{
		color: #e2e2e2;
		line-height: 40px;
		font-size: 14px;
		margin: 0;
		padding: 0;
	}
	.p-lists .p-title .p-close{
		width: 30px;
    	height: 30px;
		display: block;
		float: right;
		position: absolute;
		font-size: 0;
		top: 8px;
		right: 0;
		background: url('../../static/img/playlist.png') no-repeat -195px -21px;
	}
	.p-lists .p-content{
		font-size: 12px;
		background: url('../../static/img/playlist_bg.png') repeat-y -1020px 0;
	}
	.p-lists .p-content li{
		padding: 5px 15px;
		color: #ccc;
		cursor: pointer;
	}
	.on{
		background-color: rgba(0,0,0,0.3);
	}

</style>
