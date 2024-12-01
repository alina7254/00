package hk.burunduchan.controller

import hk.burunduchan.model.Post
import hk.burunduchan.service.PostService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/posts")
class PostController(private val postService: PostService) {

    @GetMapping("/{boardName}")
    fun getPostsByBoard(@PathVariable boardName: String): ResponseEntity<List<Post>> {
        val posts = postService.getPostsByBoard(boardName)
        return ResponseEntity.ok(posts)
    }


    @GetMapping("/{postNumber}")
    fun getPostByPostNumber(@PathVariable postNumber: Int) : ResponseEntity<List<Post>> {
        val post = postService.getPostByPostNumber(postNumber)
        return ResponseEntity.ok(post)
    }

    @GetMapping("/replies/{replyTo}")
    fun getReplies(@PathVariable replyTo: Int): ResponseEntity<List<Post>> {
        val replies = postService.getReplies(replyTo)
        return ResponseEntity.ok(replies)
    }


    @PostMapping
    fun createPost(@RequestBody postDto: PostDto): ResponseEntity<Post> {
        val board = boardRepository.findByName(postDto.board?.name)
            .orElseThrow { IllegalArgumentException("Board not found") }
        val createdPost = postService.createPost(postDto, board)
        return ResponseEntity.ok(createdPost)
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
