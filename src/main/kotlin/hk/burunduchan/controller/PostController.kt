package hk.burunduchan.controller

import hk.burunduchan.dto.PostDto
import hk.burunduchan.model.Post
import hk.burunduchan.service.PostService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api")
class PostController(private val postService: PostService) {

    @GetMapping("/{boardName}/thread/posts")
    fun getPostsByBoardName(@PathVariable boardName: String): ResponseEntity<List<Post>> {
        val posts = postService.getPostsByBoard(boardName)
        return ResponseEntity.ok(posts)
    }


    @GetMapping("/thread/{postNumber}")
    fun getPostByPostNumber(@PathVariable postNumber: Int) : ResponseEntity<List<Post>> {
        val post = postService.getPostByPostNumber(postNumber)
        return ResponseEntity.ok(post)
    }

    @GetMapping("/thread/replies/{replyTo}")
    fun getReplies(@PathVariable replyTo: Int): ResponseEntity<List<Post>> {
        val replies = postService.getReplies(replyTo)
        return ResponseEntity.ok(replies)
    }


    @PostMapping("/thread")
    fun createPost(@RequestBody postDto: PostDto): ResponseEntity<PostDto> {
        val newPost = postService.createPost(
            postDto.id,
            postDto.postNumber.toString(),
            postDto.board.toString(),
            postDto.timestamp,
            postDto.board.toString(),
        )
        return ResponseEntity.ok(newPost)
    }


    @PutMapping("/{postNumber}")
    fun updatePost(@PathVariable postNumber: Int) : ResponseEntity<Post> {
        postService.getPostByPostNumber(postNumber)
        val updatePost = postService.updatePost(postNumber)
        return ResponseEntity.ok(updatePost)
    }

    @DeleteMapping("/{postNumber}")
    fun deletePost(@PathVariable postNumber: Int) : ResponseEntity<List<Post>>{
        postService.deletePost(postNumber)
        return ResponseEntity.noContent().build()
    }
}
